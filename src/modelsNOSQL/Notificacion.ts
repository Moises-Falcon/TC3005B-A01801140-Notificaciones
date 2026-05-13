import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        collection: 'notificaciones',
        timestamps: true
    }
})
export class Notificacion {
    @prop({ required: true, trim: true })
    public tipo_alerta!: string;

    @prop({ required: true, default: false })
    public leido!: boolean;

    @prop({ required: true, enum: ['baja', 'media', 'alta'], default: 'media' })
    public prioridad!: string;
}

export const NotificacionModel = getModelForClass(Notificacion);
