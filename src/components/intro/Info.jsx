import "./info.scss";
import { Info } from "@mui/icons-material";

export default function InfoText() {
  return (
    <div class="cardInfo" tabindex="0">
      <span class="card__infoicon">
        <Info className="infoIcon" />
      </span>
    </div>
  );
}
