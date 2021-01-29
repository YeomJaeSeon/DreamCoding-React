import { firebaseDatabase } from './firebase';

export default class DataBase {
  write(uid, card) {
    firebaseDatabase.ref(`${uid}/${card.id}`).set({
      id: card.id,
      name: card.name,
      company: card.company,
      theme: card.theme,
      job: card.job,
      email: card.email,
      comment: card.comment,
      fileName: card.fileName,
      fileURL: card.fileURL,
    });
  }
  delete(uid, id) {
    firebaseDatabase.ref(`${uid}/${id}`).remove();
  }
  databseSync(uid, upDate) {
    const ref = firebaseDatabase.ref(`${uid}`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      upDate(value);
    });
    return () => ref.off();
    // off함수를 호출함으로써 리스너 해체시킨다.
  }
}
