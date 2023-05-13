import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 배달해드립니다.</h2>
      <p>
        주문 가능 음식 중에서 좋아하는 음식을 골라 주문하세요.<br />
        최고 퀄리티의 음식을 집에서 즐겨보세요.
      </p>
      <p>
        모든 음식은 최상의 재료로 자격있는 조리사가 주문 즉시 조리합니다.
      </p>
    </section>
  );
};

export default MealsSummary;