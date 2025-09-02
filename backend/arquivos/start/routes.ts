/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
*/

import router from '@adonisjs/core/services/router'

import CommentsController from '#controllers/comments_controller'

import { HttpContext } from '@adonisjs/core/http'

import app from '@adonisjs/core/services/app'

router.get('/', async() => {
   return{ hello:'a apizinha de bixo' }
})

router.group(() => {
  router.get('/', async () => {
    return { hello: 'world' }
  })
  router.get('/uploads/:file', async ({ params, response }: HttpContext) => {
  const filePath = app.makePath('tmp', 'uploads', params.file)
  return response.download(filePath)
  })
  

  const MomentsControllerImport = ()=> import('#controllers/moments_controller')

  router.resource('/moments', MomentsControllerImport)


  router.post('/moments/:momentId/comments', [CommentsController, 'store'])

}).prefix('/api')
