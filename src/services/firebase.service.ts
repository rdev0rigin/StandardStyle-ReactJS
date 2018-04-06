import { Observable, Observer } from '@reactivex/rxjs';
import * as firebase from 'firebase';

export function onDatabaseUpdate$(): Observable<firebase.database.DataSnapshot> {
	return Observable.create((observer: Observer<firebase.database.DataSnapshot>) => {
		const fbDatabase: firebase.database.Reference = firebase.database()
			.ref('/');
		fbDatabase.on(
			'value',
			(snapshot: firebase.database.DataSnapshot) => {
				observer.next(snapshot);
			});
	});
}

export async function setToDatabase(key: string, value: any): Promise<boolean> {
	const fbDatabase: firebase.database.Reference = firebase
		.database()
		.ref(key);
	return await fbDatabase
		.set(value)
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});
}
