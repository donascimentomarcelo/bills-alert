import { Router } from "express";

const routes = Router();

routes.get('/', () => console.log('Route working...'))

export default routes;