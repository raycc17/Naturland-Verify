import theme from "../../styles/theme";

export default function Button({

    children,

    onClick,

    type = "primary"

}) {

    const styles = {

        primary: {

            background: theme.colors.primary,

            color: theme.colors.white

        },

        secondary: {

            background: theme.colors.white,

            color: theme.colors.primary,

            border: `1px solid ${theme.colors.border}`

        }

    }

    return (

        <button

            onClick={onClick}

            style={{

                ...styles[type],

                padding: "14px 26px",

                borderRadius: theme.radius,

                border: "none",

                cursor: "pointer",

                fontFamily: theme.typography.fontFamily,

                fontWeight: theme.typography.medium,

                boxShadow: theme.shadows.button,

                transition: ".25s"

            }}

        >

            {children}

        </button>

    )

}
