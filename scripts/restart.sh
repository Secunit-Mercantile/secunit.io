#!/usr/bin/env bash
# Restart the Astro SSR process (systemd) after a deploy.
#
# Server path: /opt/secunit/bin/restart.sh (synced by CI; secunit user runs this)
#
# Sudoers (your setup):
#   secunit ALL=(ALL) NOPASSWD: /bin/systemctl restart secunit-io.service
#
# Override unit name:
#   SECUNIT_SYSTEMD_UNIT=my-unit.service /opt/secunit/bin/restart.sh

set -euo pipefail

UNIT="${SECUNIT_SYSTEMD_UNIT:-secunit-io.service}"

if [ "$(id -u)" -eq 0 ]; then
  exec systemctl restart "$UNIT"
fi

exec sudo systemctl restart "$UNIT"
