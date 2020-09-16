import  React from 'react';
import {actionContainer, avatar, container, postImage, userContainer} from './postStyles';
import {CommentForm} from './CommentForm';

export class Post extends React.Component<any, any> {
  render() {
    return <article style={container}>
      <header style={userContainer}>
        <img
          style={avatar}
          alt={'Barin Britva'}
          src={'https://instagram.fhel5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/109299228_225454511915197_9050500074834384651_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_ohc=Gg97jrW8X-UAX8TM4QZ&oh=2a19cd81174c8611c7887c72352c4181&oe=5F8A920C'}
        />
        <div>
          <div>Barin Britva</div>
          <div>
            <span>15 September</span>
            <span> * </span>
            <span>Facebook</span>
          </div>
        </div>
      </header>
      <main>
        <div>Summer days with Donny.<br/>Hooray! 🎉</div>
        <img
          style={postImage}
          src={'https://instagram.fhel5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/106913487_949612195465379_2284928752937235880_n.jpg?_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=4QKwpaTiqvgAX_xKwhc&oh=5f531eac517838e643d9e427389260e2&oe=5F892A00'}
          alt={''}
        />
      </main>
      <footer>
        <div style={actionContainer}>
          <div>
            <button>Like</button>
            <span>96</span>
          </div>
          <div>
            <button>Repost</button>
            <span>2</span>
          </div>
        </div>
        <CommentForm/>
      </footer>
    </article>
  }
}
