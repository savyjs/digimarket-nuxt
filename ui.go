package fixture

import (
	"embed"
)

//go:embed all:dist
var StaticFiles embed.FS
