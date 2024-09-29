import React from "react";
import style from "./QuestionAndAnswer.module.css";

export default function QuestionAndAnswer() {
  return (
    <>
      <div className={style.header}>
        <div>Question & Answers</div>
      </div>
      <div className={style.askQuestionContainer}>
        <div>Need more Information?</div>
        <button className={style.askQuestionBtn}>
          Ask a question to the seller
        </button>
      </div>
      <div className={style.buyerTable}>
        <div className={style.buyer}>Buyer (##)</div>
        <div className={style.questionNAnswer}>
          <div className={style.question}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi perferendis, similique cupiditate, tenetur eaque quo recusandae
            possimus architecto ad numquam dolorum quia maiores ea laborum dicta
            corporis aut illo!
          </div>
          <div className={style.questionDateNTime}>12:38 pm, Sun 1 Sep</div>
        </div>
      </div>
      <div className={style.sellerTable}>
        <div className={style.seller}>
          <img src="/assets/icons/material-symbols_reply.svg" alt="reply" />
          <div>Seller (##)</div>
        </div>
        <div className={style.questionNAnswer}>
          <div className={style.answer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi perferendis, similique cupiditate, tenetur eaque quo recusandae
            possimus architecto ad numquam dolorum quia maiores ea laborum dicta
            corporis aut illo!
          </div>
          <div className={style.answerDateNTime}>12:38 pm, Sun 1 Sep</div>
        </div>
      </div>
      <div className={style.buyerTable}>
        <div className={style.buyer}>Buyer (##)</div>
        <div className={style.questionNAnswer}>
          <div className={style.question}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi perferendis, similique cupiditate, tenetur eaque quo recusandae
            possimus architecto ad numquam dolorum quia maiores ea laborum dicta
            corporis aut illo!
          </div>
          <div className={style.questionDateNTime}>12:38 pm, Sun 1 Sep</div>
        </div>
      </div>
      <div className={style.sellerTable}>
        <div className={style.seller}>
          <img src="/assets/icons/material-symbols_reply.svg" alt="reply" />
          <div>Seller (##)</div>
        </div>
        <div className={style.questionNAnswer}>
          <div className={style.answer}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi perferendis, similique cupiditate, tenetur eaque quo recusandae
            possimus architecto ad numquam dolorum quia maiores ea laborum dicta
            corporis aut illo!
          </div>
          <div className={style.answerDateNTime}>12:38 pm, Sun 1 Sep</div>
        </div>
      </div>
    </>
  );
}
