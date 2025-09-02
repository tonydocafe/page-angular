import { DateTime } from 'luxon'
import { BaseModel, column} from '@adonisjs/lucid/orm'


export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare text: string 


  @column()
  declare momentId: number // chave estrangeira

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}