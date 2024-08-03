"use client"

import { apiClient } from "@apiClient";
import createStyle from "@local_modules/createStyle";
import { formatDate } from "@local_modules/formatDate";
import Div from "@local_modules/tags/Div";
import { borderRadius } from "@theme/index";
import { ICharacter } from "@type";
import { useEffect, useState } from "react";

export default function MyCharacterList() {

  const [myCharacterList, setMyCharacterList] = useState<ICharacter.MineResponse>({ list: [], totalCount: 0 });

  useEffect(() => {
    (async() => {
      const { data } = await apiClient.character.mine({ visibility: 'ALL' });
      setMyCharacterList(data);
    })()
  }, [])

  return (
    <Div style={styles.list}>
      {
        myCharacterList.list.map(character => (
          <Div key={character._id} style={styles.item}>
            <Div>{character.name}</Div>
            <Div>{character.system}</Div>
            <Div>{formatDate(character.createdAt)}</Div>
          </Div>
        ))
      }
    </Div>
  )
}

const styles = createStyle({
  list: {
    rowGap: 12,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: borderRadius.base,
    padding: '12 14'
  }
})