import _ from "lodash";

const ReviewCount = ({ reviewCount }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 10px",
        borderRadius: "999px",
        backgroundColor: "#EFF6FF",
        color: "#2563EB",
        border: "1px solid #BFDBFE",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: 1.4,
        whiteSpace: "nowrap",
      }}
    >
      {reviewCount}
    </div>
  );
};

export default ReviewCount;
