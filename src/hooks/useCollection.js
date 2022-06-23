//react
import { useState, useEffect, useRef } from "react";
//firebase
import { db } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

//taking collection name as "c"
export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c, q]);
  return { documents };
};
