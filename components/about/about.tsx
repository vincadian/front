import React, {FunctionComponent} from "react";
import {Box} from "@mui/material";

import styles from "./about.module.css";
import classNames from "classnames";

interface Props {
    className: string;
}

export const About: FunctionComponent<Props> = ({className}) => {
    return (
        <div className={classNames(className, styles.aboutContainer)}>
            <Box className={styles.aboutContent}>
                <Box textAlign='justify'>
                    <Box
                        component="img"
                        sx={{
                            width: 400,
                            height: 300
                        }}
                        src={"about.jpg"}
                        className={styles.leftimg}
                    />
                    Вчера во время проведения разведоперации наша группа подверглась нападению неизвестного
                    противника в камуфляжной форме Алиенов. В результате эффективной обороны и стремительной
                    контратаки многочисленная группа боевиков была смята и отброшена. Среди личного состава
                    потерь нет. Бойцы разведгруппы проявили недюжие навыки владения оружием. Особо отличился
                    в бою взводный Кудряшев&nbsp;М.А., грамотно использовавший человеческие ресурсы
                    своего взвода. В результате операции были захвачены элементы внеземной культуры, которые
                    переданы аналитической группе.
                    Вчера во время проведения разведоперации наша группа подверглась нападению неизвестного
                    противника в камуфляжной форме Алиенов. В результате эффективной обороны и стремительной
                    контратаки многочисленная группа боевиков была смята и отброшена. Среди личного состава
                    потерь нет. Бойцы разведгруппы проявили недюжие навыки владения оружием. Особо отличился
                    в бою взводный Кудряшев&nbsp;М.А., грамотно использовавший человеческие ресурсы
                    своего взвода. В результате операции были захвачены элементы внеземной культуры, которые
                    переданы аналитической группе.
                    Вчера во время проведения разведоперации наша группа подверглась нападению неизвестного
                    противника в камуфляжной форме Алиенов. В результате эффективной обороны и стремительной
                    контратаки многочисленная группа боевиков была смята и отброшена. Среди личного состава
                    потерь нет. Бойцы разведгруппы проявили недюжие навыки владения оружием. Особо отличился
                    в бою взводный Кудряшев&nbsp;М.А., грамотно использовавший человеческие ресурсы
                    своего взвода. В результате операции были захвачены элементы внеземной культуры, которые
                    переданы аналитической группе.
                    Вчера во время проведения разведоперации наша группа подверглась нападению неизвестного
                    противника в камуфляжной форме Алиенов. В результате эффективной обороны и стремительной
                    контратаки многочисленная группа боевиков была смята и отброшена. Среди личного состава
                    потерь нет. Бойцы разведгруппы проявили недюжие навыки владения оружием. Особо отличился
                    в бою взводный Кудряшев&nbsp;М.А., грамотно использовавший человеческие ресурсы
                    своего взвода. В результате операции были захвачены элементы внеземной культуры, которые
                    переданы аналитической группе.
                </Box>
            </Box>
        </div>
    );
}