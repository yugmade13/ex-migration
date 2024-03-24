import { faker } from '@faker-js/faker';

export type Person = {
  name: String;
  avatar: string;
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr;
}

const newPerson = (): Person => {
  return {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]
    
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
