import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { ITicket } from "@/types/Ticket";

const ticketServices = {
  getTicketsByEventId: (id: string) =>
    instance.get(`${endpoint.TICKET}/${id}/events`),
  getTicketsById: (id: string) => instance.get(`${endpoint.TICKET}/${id}`),
  addTicket: (payload: ITicket) => instance.post(endpoint.TICKET, payload),
  deleteTicket: (id: string) => instance.delete(`${endpoint.TICKET}/${id}`),
  updateTicket: (id: string, payload: ITicket) =>
    instance.put(`${endpoint.TICKET}/${id}`, payload),
};

export default ticketServices;
