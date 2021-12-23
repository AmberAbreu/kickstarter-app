import {
  Table,
  AllowNull,
  AutoIncrement,
  Column,
  NotEmpty,
  PrimaryKey,
} from "sequelize-typescript";
import { Model } from "sequelize/types";

export interface UserI {
  id?: number | null;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@Table({
  tableName: "user",
  timestamps: true,
})
export default class User extends Model implements UserI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  first_name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  last_name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password!: string;
}
