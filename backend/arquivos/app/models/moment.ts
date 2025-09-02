import { DateTime } from 'luxon'
import { BaseModel, column, hasMany,} from '@adonisjs/lucid/orm'
import Comment from '#models/comment'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Moment extends BaseModel {
  
  
  
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string
  
  @column()
  declare image: string
  
  @hasMany(()=> Comment)
  declare comments: HasMany <typeof Comment>
  
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}