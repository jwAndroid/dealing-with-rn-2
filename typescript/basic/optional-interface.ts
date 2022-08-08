interface Profile {
  id: number;
  username: string;
  displayName: string;
  photoURL?: string | undefined;
}

const profile: Profile = {
  id: 1,
  username: 'jkw',
  displayName: 'asd',
};

const profile2: Profile = {
  id: 1,
  username: 'jkw',
  displayName: 'asd',
  photoURL: 'https://sdfasflsegkk.com',
};
