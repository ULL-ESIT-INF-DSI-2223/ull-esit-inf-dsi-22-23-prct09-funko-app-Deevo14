import fs from "fs";
import chalk from "chalk";
const log = console.log;
import { FunkoPop } from "./funkoPop.js";

export class User {
  private collection: FunkoPop[] = [];

  constructor(private userName: string) {
    if (fs.existsSync(`src/FunkoPopApp/Users/${this.userName}`)) {
      const data = fs.readdirSync(`src/FunkoPopApp/Users/${this.userName}/`);
      data.forEach((file) => {
        const jsonObject = JSON.parse(
          fs
            .readFileSync(`src/FunkoPopApp/Users/${this.userName}/${file}`)
            .toString()
        );
        const newFunko = new FunkoPop(
          jsonObject.id_,
          jsonObject.name_,
          jsonObject.description_,
          jsonObject.type_,
          jsonObject.genre_,
          jsonObject.franchise_,
          jsonObject.num_,
          jsonObject.exclusive_,
          jsonObject.specialFeatures_,
          jsonObject.marketValue_
        );
        this.collection.push(newFunko);
      });
    } else {
      fs.mkdirSync(`src/FunkoPopApp/Users/${this.userName}`);
    }
  }

  public addFunko(funko: FunkoPop) {
    if (
      fs.existsSync(`src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`)
    ) {
      log(chalk.red("Funko already in your collection"));
    } else {
      fs.writeFileSync(
        `src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`,
        JSON.stringify(funko)
      );
      this.collection.push(funko);
      log(chalk.green("Funko added to your collection"));
    }
  }

  public removeFunko(id: number) {
    if (fs.existsSync(`src/FunkoPopApp/Users/${this.userName}/${id}.json`)) {
      fs.unlinkSync(`src/FunkoPopApp/Users/${this.userName}/${id}.json`);
      this.collection = this.collection.filter((funko) => funko.ID !== id);
      log(chalk.green("Funko removed from your collection"));
    } else {
      log(chalk.red("Funko not in your collection"));
    }
  }

  public updateFunko(funko: FunkoPop) {
    if (
      fs.existsSync(`src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`)
    ) {
      fs.writeFileSync(
        `src/FunkoPopApp/Users/${this.userName}/${funko.ID}.json`,
        JSON.stringify(funko)
      );

      log(chalk.green("Funko modified"));
    } else {
      log(chalk.red("Funko not in your collection"));
    }
  }

  private getMarketValueColor(marketValue: number) {
    const marketValueRanges = [
      { min: 0, max: 10 },
      { min: 11, max: 50 },
      { min: 51, max: 100 },
      { min: 101, max: Number.MAX_VALUE },
    ];

    const marketValueColors = [
      chalk.green(marketValue.toString()),
      chalk.yellow(marketValue.toString()),
      chalk.red(marketValue.toString()),
      chalk.magenta(marketValue.toString()),
    ];

    for (let i = 0; i < marketValueRanges.length; i++) {
      if (
        marketValue >= marketValueRanges[i].min &&
        marketValue <= marketValueRanges[i].max
      ) {
        return marketValueColors[i];
      }
    }

    return chalk.green(marketValue.toString());
  }

  public showFunkos() {
    if (this.collection.length === 0) {
      log(chalk.red("Your collection is empty"));
    } else {
      this.collection.forEach((funko) => {
        log(chalk.green(`ID: ${funko.ID}`));
        log(chalk.green(`Name: ${funko.Name}`));
        log(chalk.green(`Description: ${funko.Description}`));
        log(chalk.green(`Type: ${funko.Type}`));
        log(chalk.green(`Genre: ${funko.Genre}`));
        log(chalk.green(`Franchise: ${funko.Franchise}`));
        log(chalk.green(`Number: ${funko.Num}`));
        log(chalk.green(`Exclusive: ${funko.Exclusive}`));
        log(chalk.green(`Special Features: ${funko.SpecialFeatures}`));
        log(
          chalk.green(
            `Market Value: ${this.getMarketValueColor(funko.MarketValue)}`
          )
        );
        log(chalk.green("----------------------------------"));
      });
    }
  }

  public showFunko(id: number) {
    const marketValueRanges = [
      { min: 0, max: 10 },
      { min: 11, max: 50 },
      { min: 51, max: 100 },
      { min: 101, max: Number.MAX_VALUE },
    ];

    const getMarketValueColor = (marketValue: number) => {
      const rangeIndex = marketValueRanges.findIndex(
        (range) => marketValue >= range.min && marketValue <= range.max
      );
      switch (rangeIndex) {
        case 0:
          return chalk.red(marketValue);
        case 1:
          return chalk.yellow(marketValue);
        case 2:
          return chalk.green(marketValue);
        case 3:
          return chalk.blue(marketValue);
        default:
          return marketValue;
      }
    };

    const funko = this.collection.find((funko) => funko.ID === id);
    if (funko) {
      log(chalk.green(`ID: ${funko.ID}`));
      log(chalk.green(`Name: ${funko.Name}`));
      log(chalk.green(`Description: ${funko.Description}`));
      log(chalk.green(`Type: ${funko.Type}`));
      log(chalk.green(`Genre: ${funko.Genre}`));
      log(chalk.green(`Franchise: ${funko.Franchise}`));
      log(chalk.green(`Number: ${funko.Num}`));
      log(chalk.green(`Exclusive: ${funko.Exclusive}`));
      log(chalk.green(`Special Features: ${funko.SpecialFeatures}`));
      log(
        chalk.green(`Market Value: ${getMarketValueColor(funko.MarketValue)}`)
      );
    } else {
      log(chalk.red("Funko not in your collection"));
    }
  }
}
