import React from "react";
import classes from "./title.module.css";

function Title() {
  return (
    <div className={classes.list}>
      <img
        className={classes.img}
        src="https://charlie-day.com/photos/albums/Television/IASIP/Season_09/Promotionals/IASIPS09Promo-008.jpg"
      />
      <div className={classes.prof}>
        <img
          src="https://pbs.twimg.com/profile_images/1153463025061552128/2PIAbE_k_400x400.jpg"
          alt=""
        />
        <div className={classes.who}>
          <div>Danny</div>
          <div>Was born: 17.11.1944</div>
          <div>
            Family: wife-Rhea Perlman <br /> childs-Дэниэл Дж. ДеВито, Грейси
            ДеВито, Люси ДеВито
          </div>
          <div>
            About:is an American actor, director, producer, and screenwriter. He
            gained prominence for his portrayal of the taxi dispatcher Louie De
            Palma in the television series Taxi (1978–1983), which won him a
            Golden Globe Award and an Emmy Award. He plays Frank Reynolds on the
            FX and FXX sitcom It's Always Sunny in Philadelphia (2006–present).
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
