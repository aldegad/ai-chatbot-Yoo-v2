"use client"

import { apiClient } from "@apiClient";
import { useErrorCatch } from "@components/useErrorCatch";
import createStyle from "@local_modules/theme/createStyle";
import { formatDate } from "@local_modules/formatDate";
import Div from "@local_modules/tags/Div";
import { borderRadius, color } from "@theme/index";
import { ICharacter } from "@type";
import { useEffect, useState } from "react";
import Button from "@local_modules/tags/Button";
import useRouter from "@local_modules/router/useRouter";
import { Schema } from "mongoose";

export default function MyCharacterList() {
  const router = useRouter();
  const { createErrorCatch } = useErrorCatch();

  const [myCharacterList, setMyCharacterList] = useState<ICharacter.MineResponse>({ list: [], totalCount: 0 });

  useEffect(() => {
    (async() => {
      try {
        const { data } = await apiClient.character.mine({ visibility: 'ALL' });
        setMyCharacterList(data);
      } catch(error) {
        createErrorCatch(error);
      }
    })()
  }, [])

  const onNavToChat = (_id:Schema.Types.ObjectId) => {
    router.push(`/chat/${_id}`);
  }

  return (
    <Div style={styles.list}>
      {
        myCharacterList.list.map(character => (
          <Button key={String(character._id)} style={styles.item} onClick={() => onNavToChat(character._id)}>
            <Div style={styles.name}>{character.name}</Div>
            <Div>{character.system}</Div>
            <Div style={styles.createAt}>{formatDate(character.createdAt)}</Div>
          </Button>
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
    padding: '12 14',
    rowGap: 6,
    textAlign: 'left',
    alignItems: 'flex-start'
  },
  name: {
    fontSize: 18,
    fontWeight: 600,
    color: color.primary
  },
  createAt: {
    fontSize: 12,
    color: color.gray
  }
})