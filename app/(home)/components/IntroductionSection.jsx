import Description from "@/partials/elements/Description"
import Headline from "@/partials/elements/Headline"

function IntroductionSection() {

    return (
        <div className="droid-lover-font">
            <Headline
                text="hello changemakers,"
                extraClass="md:text-3xl md:pb-5"
            />
            <Headline
                text="i'm Sheehan Rahman"
                extraClass="md:text-5xl md:pb-6 text-2xl md:text-5xl"
            />
            <Headline
                text="A tech"
                subText="consultant"
                extraClass="text-3xl md:text-7xl"
                textColor="#FE59D7"
            />
            <Description
                text="I'm a dynamic Tech and Online Sales Consultant dedicated to helping businesses leverage technology and/or digital strategies to maximize their sales potential."
                extraClass="md:max-w-5xl md:text-xl md:pt-12 pb-12 md:pb-20 opacity-70"
            />

        </div>
    )
}

export default IntroductionSection