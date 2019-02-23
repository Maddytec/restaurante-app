export class User {
  public constructor(public email: string,
        public name: string,
        private password: string) {}

        matches(user: User): boolean {
        return (user !== undefined &&
            user.email === this.email &&
            user.password === this.password);
    }

}

export const users: {[key: string]: User} = {
    'madson.silva@maddytec.com.br': new User('madson.silva@maddytec.com.br', 'Madson Silva', 'madson12'),
    'madson@maddytec.com.br': new User('madson@maddytec.com.br', 'Madson Araujo', 'madson1234'),
}


