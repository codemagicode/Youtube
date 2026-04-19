export function sampleJson() {
  return [
    `
{
  "meta": {
    "version": "9.7.3-beta+exp.sha.5114f85",
    "generatedAt": "2026-03-21T18:42:11Z",
    "checksum": "a9f5e3c1d7b8e6f4",
    "flags": [true, false, null, "undefined-but-not-really"]
  },
  "system": {
    "env": {
      "os": {
        "name": "linux",
        "kernel": "6.8.12",
        "arch": "x86_64"
      },
      "containers": [
        {
          "id": "c1",
          "status": "running",
          "resources": {
            "cpu": "2.5",
            "memory": {
              "limit": "512Mi",
              "used": "387Mi",
              "breakdown": [
                { "type": "heap", "value": 200 },
                { "type": "stack", "value": 50 },
                { "type": "mystery", "value": 137 }
              ]
            }
          }
        }
      ]
    }
  },
  "users": [
  `,
    `
    {
      "id": 1,
      "name": {
        "first": "John",
        "last": "Doe",
        "aliases": ["ghost", "shadow", { "codename": "x-13", "active": true }]
      },
      "roles": ["admin", "editor"],
      "permissions": {
        "read": true,
        "write": true,
        "execute": false,
        "overrides": [
          {
            "resource": "/secure/data",
            "conditions": [
              { "if": "time > 22:00", "then": "deny" },
              { "if": "ip == 127.0.0.1", "then": "allow" }
            ]
          }
        ]
      },
      "activity": {
        "lastLogin": null,
        "sessions": [
          {
            "sessionId": "abc123",
            "events": [
              { "type": "click", "coords": [120, 450] },
              { "type": "scroll", "depth": 0.87 },
              {
                "type": "error",
                "details": {
                  "code": 500,
                  "message": "Something went terribly wrong",
                  "stack": [
                  `,
    `
                    "at fn1 (app.js:10)",
                    "at fn2 (lib.js:42)",
                    { "unknown": ["??", { "deeper": ["still here"] }] }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "features": {
    "experiments": {
      "A/B": {
        "groups": [
          { "name": "control", "ratio": 0.5 },
          { "name": "variant", "ratio": 0.5 }
        ],
        "results": {
          "conversionRate": 0.1234,
          "confidenceInterval": [0.1, 0.14]
        }
      }
    },
    "toggles": {
      "darkMode": true,
      "aiOverlord": {
        "enabled": true,
        "mood": ["curious", "unstable", { "phase": "learning", "risk": 0.93 }]
      }
    }
  },
}
`
  ]
}
