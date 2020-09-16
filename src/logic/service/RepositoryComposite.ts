import {BaseSocialMediaRepository} from '../interfaces/BaseSocialMediaRepository';
import {RepostableSocialMediaRepository} from '../interfaces/RepostableSocialMediaRepository';
import {WallPost} from '../interfaces/WallPost';
import {SocialMediaProvider} from '../types/SocialMediaProvider';

export class RepositoryComposite implements RepostableSocialMediaRepository {
  provider: SocialMediaProvider = 'composite';
  private repositories: (BaseSocialMediaRepository | RepostableSocialMediaRepository)[]

  constructor(repositories: (BaseSocialMediaRepository | RepostableSocialMediaRepository)[]) {
    this.repositories = repositories
  }

  public commentPost(post: WallPost, comment: string): Promise<WallPost> {
    const repository = this.findPostProvider(post);

    return repository.commentPost(post, comment);
  }

  public getAllPosts(): Promise<WallPost[]> {
    const postsPromise = Promise.all(this.repositories.map((repository) => {
      return repository.getAllPosts()
    }))
      .then((results) => {
        const allPosts: WallPost[] = []
        results.forEach((result) => {
          allPosts.push(...result)
        })

        return allPosts;
      })

    return postsPromise;
  }

  public likePost(post: WallPost): Promise<WallPost> {
    const repository = this.findPostProvider(post);

    return repository.likePost(post);
  }

  public repostPost(post: WallPost): Promise<WallPost> {
    const repository = this.findPostProvider(post);

    if (!this.isRepostableProvider(repository)) {
      throw new Error(`Provider "${post.provider}" can not do reposts`);
    }

    return repository.repostPost(post);
  }

  private findPostProvider(post: WallPost): BaseSocialMediaRepository | RepostableSocialMediaRepository {
    const repository = this.repositories.find((repository) => {
      return repository.provider === post.provider;
    })

    if (repository == null) {
      throw new Error(`Provider "${post.provider}" not found.`)
    }

    return repository;
  }

  private isRepostableProvider(provider: any): provider is RepostableSocialMediaRepository {
    return 'repostPost' in provider;
  }
}
