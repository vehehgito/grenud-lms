# grenud-lms
PERN stack learning management system.

## General Important Commands
- Installing pnpm using Windows PowerShell
```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

- Creating a new Vite project in the same directory with react-ts template
```
pnpm create vite ./ --template react-ts   
```

- Installing dependencies
```
pnpm i
```

- Running server
```
pnpm run dev
```

- Installing OpenSSH (Windows)
```
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

- Connecting to the ec2-db-connect1 instance
#### Place the EC2-RDS-Connect.pem file in the directory you're in
```
ssh -i "EC2-RDS-Connect.pem" ec2-user@ec2-15-206-149-39.ap-south-1.compute.amazonaws.com
```

- Connecting to the PostgreSQL server via Amazon EC2 Instance
```
psql --host=bayava-lms.clykoow2ix8x.ap-south-1.rds.amazonaws.com --port=5432 --username=postgres --password --dbname= 
```