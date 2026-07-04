import theme from "../../styles/theme";

export default function Title({

    children,

    marginBottom = "30px"

}) {

    return (

        <h1

            style={{

                color: theme.colors.primary,

                fontFamily: theme.typography.fontFamily,

                fontWeight: theme.typography.regular,

                fontSize: theme.typography.h1,

                marginBottom

            }}

        >

            {children}

        </h1>

    )

}
