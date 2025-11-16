import { Router } from 'express';
import { ServicoUsuario } from '../servicos/ServicoUsuario';
import { ControladorUsuario } from '../controladora/ControladorUsuario';

const rotas = Router();
const servicoUsuario = new ServicoUsuario();
const controladorUsuario = new ControladorUsuario(servicoUsuario);

/**
 * @openapi
 * /criar-usuario:
 *   post:
 *     summary: Cria um novo usuário
 *     description: Endpoint para criar um usuário no sistema.
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Leonardo"
 *               email:
 *                 type: string
 *                 example: "leonardo@iff.com"
 *               senha:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *       400:
 *         description: Dados inválidos.
 */
rotas.post('/criar-usuario', (req, res) => {
  controladorUsuario.criarUsuario(req, res);
});

export default rotas;
