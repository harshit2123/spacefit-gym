import Link from "next/link";

interface PlanProps {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const plans: PlanProps[] = [
  {
    name: "Basic",
    price: "$25",
    features: ["Pilates Coaching", "Pilates Coaching", "Pilates Coaching"],
  },
  {
    name: "Standard",
    price: "$35",
    features: ["Pilates Coaching", "Pilates Coaching", "Pilates Coaching"],
  },
  {
    name: "Elite",
    price: "$45",
    features: ["Pilates Coaching", "Pilates Coaching", "Pilates Coaching"],
    highlighted: true,
  },
];

function PricingCard({ name, price, features, highlighted }: PlanProps) {
  return (
    <div
      style={{
        width: "434px",
        height: "486px",
        borderRadius: "29px",
        border: highlighted
          ? "1px solid var(--color-primary)"
          : "1px solid var(--color-border-light)",
        backgroundColor: highlighted
          ? "var(--color-primary-dark)"
          : "var(--color-surface)",
        padding: "53px 63px 51px 59px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Plan name */}
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontWeight: 700,
            fontSize: "30px",
            lineHeight: 1.27,
            color: highlighted ? "var(--color-primary)" : "var(--color-text)",
          }}
        >
          {name}
        </p>

        {/* Price */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "64px",
              lineHeight: 1.05,
              color: "var(--color-text)",
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              color: "var(--color-border-light)",
              paddingBottom: "12px",
              paddingLeft: "8px",
            }}
          >
            /mo
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(134,134,139,0.3)",
          }}
        />

        {/* Features */}
        <ul
          style={{
            listStyle: "disc",
            paddingLeft: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
        >
          {features.map((f, i) => (
            <li
              key={i}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: 1.35,
                color: "var(--color-text-muted)",
              }}
            >
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "48px",
          borderRadius: "43px",
          background: "var(--color-primary)",
          color: "#2a2a2a",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          textTransform: "capitalize",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        Get Started
      </Link>
    </div>
  );
}

export default function Pricing({ className }: { className?: string }) {
  return (
    <section
      className={className}
      style={{
        backgroundColor: "var(--color-bg)",
        padding: "80px 30px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "39px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {plans.map((p) => (
          <PricingCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
