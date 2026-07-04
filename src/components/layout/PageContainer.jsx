import theme from "../../styles/theme";

export default function PageContainer({ children }) {
  return (
    <main
      style={{
        background: theme.colors.cream,
        minHeight: "100vh",
        width: "100%",
        padding: theme.spacing.xl,
        fontFamily: theme.typography.fontFamily
      }}
    >
      <div
        style={{
          maxWidth: theme.maxWidth,
          margin: "0 auto"
        }}
      >
        {children}
      </div>
    </main>
  );
}
