import { useEffect, useState } from "react";
import "./kata1.css";

const Kata1 = () => {
  const list = [1, 8, 2, 2, 3, 4, 7, 2];

  const [listAscending, setListAscending] = useState([1, 8, 2, 2, 3, 4, 7, 2]);
  const [listDescending, setListDescending] = useState([
    1, 8, 2, 2, 3, 4, 7, 2,
  ]);
  const [totalReduce, setTotalReduce] = useState(0);
  const [frequency, setFrequency] = useState([]);
  const [indexEight, setIndexEight] = useState();

  const ascending = (list) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - 1; j++) {
        if (list[j] > list[j + 1]) {
          const temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    return list;
  };

  const descending = (list) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - 1; j++) {
        if (list[j] < list[j + 1]) {
          const temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    return list;
  };

  const functionReduce = (list) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += list[i];
      setTotalReduce(total);
    }
  };

  const frequencyList = (list) => {
    const frequency = {};
    for (let i = 0; i < list.length; i++) {
      var num = list[i];
      frequency[num] = frequency[num] ? frequency[num] + 1 : 1;
    }
    const frequencyArray = Object.entries(frequency).map(
      ([number, frequency]) => ({
        number,
        frequency,
      })
    );
    setFrequency(frequencyArray);
  };

  const functionFindEight = (list) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === 8) {
        setIndexEight(i + 1);
      } else setIndexEight("Pas de chiffre 8 dans la liste...");
    }
  };

  useEffect(() => {
    functionFindEight(list);
    frequencyList(list);
    functionReduce(list);
    setListAscending(ascending(listAscending));
    setListDescending(descending(listDescending));
  }, []);

  return (
    <div className="containerKata1">
      <div className="rulesKata">
        <div className="topRulesKata">
          <div className="title">Les listes</div>
          <div className="level">* * *</div>
        </div>
        <div className="textRulesKata">
          Avec la liste suivante 1, 8, 2, 2, 3, 4, 7, 2. Classer les élements
          dans l'ordre croissant, décroissant, coder : la fonction reduce,
          compter la fréquence d'apparition d'un chiffre, la fonction find pour
          le chiffre 8 en renvoyant aussi son index.
        </div>
        <div>
          Liste classée par ordre croissant : {listAscending.join(", ")}
        </div>
        <div>
          Liste classée par ordre décroissant : {listDescending.join(", ")}
        </div>
        <div>Reduce : {totalReduce}</div>
        <div>
          Frequence :
          {frequency.map((item) => (
            <div key={item.number}>
              {item.number}: {item.frequency}
            </div>
          ))}
        </div>
        <div>Le chiffre 8 est à l'index : {indexEight}</div>
      </div>
    </div>
  );
};

export default Kata1;
