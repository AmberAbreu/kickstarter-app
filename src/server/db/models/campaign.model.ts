import {
  Table,
  AllowNull,
  AutoIncrement,
  Column,
  NotEmpty,
  PrimaryKey,
  Model,
} from "sequelize-typescript";

export interface CampaignI {
  id?: number | null;
  name: string;
  description: string;
  amtNeeded: number;
  status: boolean;
}

@Table({
  tableName: "campaign",
  timestamps: true,
})
export default class Campaign extends Model implements CampaignI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  description!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  amtNeeded!: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  status!: boolean;
}
