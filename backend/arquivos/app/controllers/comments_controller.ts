    
import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'
import Comment from '#models/comment'

export default class CommentsController {
  public async store({ request, params, response }: HttpContext) {
    const body = request.body()
    console.log('BODY RECEBIDO:', body)

    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    body.momentId = momentId

    const comment = await Comment.create(body)

    // Aqui está a parte importante
    return response.status(201).json({
      message: 'Commentario criado com sucesso',
      data: comment,
    })
  }
}

