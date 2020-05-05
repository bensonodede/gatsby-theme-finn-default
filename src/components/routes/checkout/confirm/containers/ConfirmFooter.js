import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { navigate } from "@reach/router";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { locked } from "react-icons-kit/ionicons/locked";
import { SuccessToast, ErrorToast } from "components/toast";

// Import graphql operations
import { CREATE_ORDER } from "components/graphql/mutation";

const ConfirmFooter = ({
  humanId,
  productId,
  price,
  buyerNum,
  storeUsername,
}) => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(CREATE_ORDER);

  if (data) {
    setTimeout(() => {
      navigate(`/product/${humanId}/checkout/waiting`, {
        state: { orderId: data.createOrder.id },
      });
    }, 3700);
  }

  return (
    <>
      {/* Desktop footer */}
      <div className="column is-10-tablet is-10-desktop is-hidden-mobile has-text-left">
        <div className="columns">
          <div className="column is-4-tablet">
            <Button
              isLoading={loading}
              isFullWidth={true}
              isLight={true}
              onClick={() =>
                mutate({
                  variables: { productId, price, buyerNum, storeUsername },
                })
              }
            >
              <div className="confirm-footer__btn">
                <div className="confirm-footer__icon">
                  <Icon icon={locked} size={"100%"} />
                </div>
                Confirm and pay
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile footer*/}
      <div className="confirm-footer is-hidden-tablet">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile">
              <Button
                isLoading={loading}
                isFullWidth={true}
                isLight={true}
                onClick={() =>
                  mutate({
                    variables: { productId, price, buyerNum, storeUsername },
                  })
                }
              >
                <div className="confirm-footer__btn">
                  <div className="confirm-footer__icon">
                    <Icon icon={locked} size={"100%"} />
                  </div>
                  Confirm and pay
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Success toast */}
      {data && (
        <SuccessToast
          timing={3500}
          text={"M-pesa request successful"}
          emoji={"👍"}
        />
      )}

      {/* Error toast */}
      {error && <ErrorToast text={"M-pesa request failed"} emoji={"💩"} />}
    </>
  );
};

export default ConfirmFooter;
