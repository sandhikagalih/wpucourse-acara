import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { IEvent } from "@/types/Event";

const eventServices = {
  getEvents: (params?: string) => instance.get(`${endpoint.EVENT}?${params}`),
  getEventById: (id: string) => instance.get(`${endpoint.EVENT}/${id}`),
  getEventBySlug: (slug: string) =>
    instance.get(`${endpoint.EVENT}/${slug}/slug`),
  addEvent: (payload: IEvent) => instance.post(endpoint.EVENT, payload),
  deleteEvent: (id: string) => instance.delete(`${endpoint.EVENT}/${id}`),
  updateEvent: (id: string, payload: IEvent) =>
    instance.put(`${endpoint.EVENT}/${id}`, payload),
  searchLocationByRegency: (name: string) =>
    instance.get(`${endpoint.REGION}-search?name=${name}`),
  getRegencyById: (id: string) =>
    instance.get(`${endpoint.REGION}/${id}/regency`),
};

export default eventServices;
