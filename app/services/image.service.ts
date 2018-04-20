import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

import { Image } from '../models/Image';

@Injectable()
export class ImageService {
  images: Observable<Image[]>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }


  getImageData(library: string): Observable<Image[]>{
    this.images = this.afs.collection(library).snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Image;
        //data.url = this.landscapes.getDownloadURL();
        //console.log(data.url);
        return data;
      });
    });

    return this.images;
  }

  getImages(library: string, img: string): Observable<string>{
    return this.storage.ref(`${library}/${img}`).getDownloadURL();
  }

}
