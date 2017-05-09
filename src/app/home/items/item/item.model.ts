import {Opinion} from '../item-details/opinion.model';
export class Item {
  public _id: string;
  public name: string;
  public desc: string;
  public imgPath: string;
  public price: number;
  public opinions: Opinion[];

  constructor(name: string, desc: string, imgPath: string, price: number) {
    this.name = name;
    this.desc = desc;
    this.imgPath = imgPath;
    this.price = price;
  }
}
