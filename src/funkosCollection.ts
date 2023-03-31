/*import { FunkoPop } from "./funkoPop.js";
import { User } from "./user.js";
export class FunkosCollection {
  private collection: FunkoPop[];
  private user: User;

  constructor(user: User, collection: FunkoPop[]) {
    this.collection = collection;
    this.user = user;
  }

  addFunkoPop(funkoPop: FunkoPop): boolean {
    this.collection.forEach((element) => {
      if (element.ID === funkoPop.ID) {
        return false;
      }
    });
    return true;
  }

    removeFunkoPop(funkoPop: FunkoPop): boolean {
      this.collection.forEach((element) => {
        if (element.ID === funkoPop.ID) {
          return true;
        }
      });
      return false;
    }
}
*/
