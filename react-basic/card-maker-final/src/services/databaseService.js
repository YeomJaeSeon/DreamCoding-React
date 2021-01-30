import {firebaseDatabase} from './firebase'

export default class Database{
  write(uid, content){
    firebaseDatabase.ref(`${uid}/${content.id}`).set(content)
  }
  delete(uid, id){
    firebaseDatabase.ref(`${uid}/${id}`).remove();
  }
  dataSync(uid, callback){
    const ref = firebaseDatabase.ref(`${uid}`);
    ref.on('value', callback);

    return () => ref.off();
  }
}