import { getOrder } from "../../services/apiRestaurant";

export async function orderLoader({ params }) {
  const id = params.orderId;
  const order = await getOrder(id);
  return order;
}
