import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import { NotificacionModel } from "../modelsNOSQL/Notificacion";

export default class NotificacionController extends AbstractController {
    private static _instance: NotificacionController;

    public static get instance(): NotificacionController {
        return this._instance ||
            (this._instance = new this("Notificacion"));
    }

    protected initRoutes(): void {
        this.router.get('/listarNotificaciones',
            this.getListarNotificaciones.bind(this));
        this.router.post('/crearNotificacion',
            this.postCrearNotificacion.bind(this));
    }

    private async getListarNotificaciones(req: Request, res: Response): Promise<void> {
        try {
            const notificaciones = await NotificacionModel.find().sort({ createdAt: -1 });
            res.status(200).json(notificaciones);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    private async postCrearNotificacion(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            await NotificacionModel.create(req.body);
            res.status(200).json({ message: "Registro de notificación exitoso" });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}
