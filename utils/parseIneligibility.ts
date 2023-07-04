import { ClaimEligibility } from "@thirdweb-dev/sdk";

export function parseIneligibility(
  reasons: ClaimEligibility[],
  quantity = 0
): string {
  if (!reasons.length) {
    return "";
  }

  const reason = reasons[0];

  if (
    reason === ClaimEligibility.Unknown ||
    reason === ClaimEligibility.NoActiveClaimPhase ||
    reason === ClaimEligibility.NoClaimConditionSet
  ) {
    return "This drop is not ready to be minted.";
  } else if (reason === ClaimEligibility.NotEnoughTokens) {
    return "not eligible";
  } else if (reason === ClaimEligibility.AddressNotAllowed) {
    if (quantity > 1) {
      return `You are eligible`;
    }

    return "✅ Claimed.";
  }

  return reason;
}