import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

export function setupSwagger(app: Express) {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API - Meu Projeto',
        version: '1.0.0',
      },
    },

    // Aqui você aponta para onde estão suas rotas
    apis: ['./src/rotas/*.ts'],
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
