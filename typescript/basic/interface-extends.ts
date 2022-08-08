interface Profile {
  id: number;
  username: string;
  displayName: string;
}

interface Account extends Profile {
  email: string;
  password: number;
}

const account: Account = {
  id: 1,
  username: 'jw',
  displayName: 'jw123',
  email: 'asd@asd.com',
  password: 123,
};
