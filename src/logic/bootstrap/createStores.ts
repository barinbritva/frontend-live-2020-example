import {FeedStore} from '../store/FeedStore';
import {FilterStore} from '../store/FilterStore';
import {RepositoryComposite} from '../service/RepositoryComposite';
import {FacebookRepository} from '../repositories/FacebookRepository';
import {User} from '../interfaces/User';

export function createStores(): [FeedStore, FilterStore, User] {
  const feedStore = new FeedStore(new RepositoryComposite([new FacebookRepository()]));
  const filterStore = new FilterStore(feedStore);
  const user: User = {
    name: 'Ali Ragimov',
    avatar: 'https://instagram.fhel5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/109299228_225454511915197_9050500074834384651_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_ohc=Gg97jrW8X-UAX8TM4QZ&oh=2a19cd81174c8611c7887c72352c4181&oe=5F8A920C',
    username: 'barinbrtiva'
  }

  return [
    feedStore,
    filterStore,
    user
  ];
}
