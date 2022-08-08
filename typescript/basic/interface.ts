interface Profile {
  id: number;
  username: string;
  displayName: string;
}

const getUsername = (profile: Profile) => {
  console.log(profile.username);
};

const object: Profile = {
  id: 1,
  username: 'jw',
  displayName: 'jwjw',
};

getUsername(object);

/**
 * 타입 연결
 */

interface User {
  id: number;
  username: string;
  displayName: string;
}

interface RelationShip {
  from: User;
  to: User;
}

const relationship: RelationShip = {
  from: {
    id: 1,
    username: '12',
    displayName: '123124',
  },
  to: {
    id: 2,
    username: '122',
    displayName: '1231224',
  },
};
