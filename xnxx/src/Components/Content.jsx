import React from 'react';

function Content({ player, setPlayer }) {
    const handleClick = (i) => {
        const newPlayerList = [...player];
        newPlayerList[i].point += 1;
        setPlayer(newPlayerList);
    };

    const handleDelete = (i) => {
        const deletePlayer = [...player];
        deletePlayer.splice(i, 1);
        setPlayer(deletePlayer);
    };
    const highestPoint = Math.max(...player.map((e) => e.point));

    return (
        <div className="content">
            {player.map((e, i) => (
                <div className="parent" key={i}>
                    <div className="nameplayer">
                        <i
                            onClick={() => handleDelete(i)}
                            className="fa-solid fa-xmark"
                        />
                        <i
                            className={
                                `fa-sharp fa-solid fa-crown 
                                ${e.point === highestPoint && e.point !== 0 ? 'win' : ''
                                }`}
                        />
                        <span>{e.name}</span>
                    </div>
                    <div className="content-right">
                        <i className="fa-solid fa-minus" />
                        <span>{e.point}</span>
                        <i onClick={() => handleClick(i)} className="fa-solid fa-plus" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Content;
