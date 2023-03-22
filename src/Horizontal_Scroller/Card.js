import React from 'react'
import Horizontal from './Horizontal'
import style from './Horizontal.module.css'

export default function Card() {
    const cardProfile = [{
        image: "https://media.licdn.com/dms/image/D5603AQEwC3XCUpOHWQ/profile-displayphoto-shrink_800_800/0/1664997614166?e=1684972800&v=beta&t=yb2S8ROvYX_vfPgHujjx0MrCIJCkGSR6I7PLDjoXF7k",
        name: "Janamjay kumar",
        designation: "Project Manager @ Google india",
        experience: "3 Years"
    }
        , {
        image: "https://media.licdn.com/dms/image/C4D03AQFo194tz6cvSA/profile-displayphoto-shrink_800_800/0/1646836030102?e=1684972800&v=beta&t=v1MuAMjT_bjTUQcwQrwtoqsyLOa12hmKMD6nzUdorLY",
        name: "Bapi Majumder",
        designation: "Project Manager @ Google india",
        experience: "4 Years"
    }
        , {
        image: "https://media.licdn.com/dms/image/C5603AQGABMd9MplFbw/profile-displayphoto-shrink_800_800/0/1634095016740?e=1684972800&v=beta&t=KqeHURjD2DGTG-5fj0GGSCZv-yEvhue8IZbUe-NLLQ8",
        name: "Shivam Raj",
        designation: "Project Manager @ Google india",
        experience: "4 Years"
    }
        , {
        image: "https://media.licdn.com/dms/image/D5635AQHk2h67ChuhNw/profile-framedphoto-shrink_800_800/0/1678079627007?e=1680105600&v=beta&t=-R5KawMpZx-VjUD_2YM6L9H_JoynP_mtgOo1UG_Sh-M",
        name: "Roushan Singh",
        designation: "Project Manager @ Google india",
        experience: "4 Years"
    }]
    return (
        <>
            <div className={style.aboutMentors}>
                <h1>Know Your Mentors</h1>
                <p>Work with a mentor(senior data scientists from top companies) who closely looks at your progress, gives you personalized feedback and helps and helps you fill gaps in your knowledge</p>
            </div>
            <div className={style.mentors}>
                {cardProfile.map((data) => {
                    return (
                        <Horizontal image={data.image} name={data.name} designation={data.designation} experience={data.experience} />
                    )
                }
                )}
            </div>
        </>
    )
}
