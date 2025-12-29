import { ICart, ITicket } from "@/types/Ticket";
import { convertIDR } from "@/utils/currency";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PropTypes {
  cart: ICart;
  dataTicketInCart: ITicket;
  onChangeQuantity: (type: "increment" | "decrement") => void;
  onCreateOrder: () => void;
  isLoading: boolean;
}

const DetailEventCart = (props: PropTypes) => {
  const { cart, dataTicketInCart, onChangeQuantity, onCreateOrder, isLoading } =
    props;
  const session = useSession();
  const router = useRouter();
  return (
    <Card radius="lg" className="border-none p-6 lg:sticky lg:top-[80px]">
      {session.status === "authenticated" ? (
        <CardBody className="gap-2">
          <h2 className="text-xl font-semibold text-foreground-700">Cart</h2>
          {cart.ticket === "" ? (
            <p className="text-foreground-500">Your cart is empty</p>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="font-bold">{dataTicketInCart.name}</h4>
                <div className="flex items-center gap-2">
                  <Button
                    size="md"
                    variant="bordered"
                    className="h-9 w-9 min-w-0 scale-80 rounded-full font-bold text-foreground-500"
                    onPress={() => onChangeQuantity("decrement")}
                  >
                    -
                  </Button>
                  <span className="text-lg font-bold">{cart.quantity}</span>
                  <Button
                    size="md"
                    variant="bordered"
                    className="h-9 w-9 min-w-0 scale-80 rounded-full font-bold text-foreground-500"
                    onPress={() => onChangeQuantity("increment")}
                  >
                    +
                  </Button>
                </div>
              </div>
              <p className="font-bold">
                {convertIDR(Number(dataTicketInCart.price) * cart.quantity)}
              </p>
            </div>
          )}
          <Divider />
          <Button
            fullWidth
            color="danger"
            size="md"
            disabled={cart.quantity === 0 || isLoading}
            className="disabled:bg-danger-200"
            onPress={onCreateOrder}
          >
            {isLoading ? <Spinner size="sm" color="white" /> : "Checkout"}
          </Button>
        </CardBody>
      ) : (
        <CardBody>
          <Button
            color="danger"
            size="lg"
            as={Link}
            href={`/auth/login?callbackUrl=/event/${router.query.slug}`}
          >
            Login for book ticket
          </Button>
        </CardBody>
      )}
    </Card>
  );
};

export default DetailEventCart;
