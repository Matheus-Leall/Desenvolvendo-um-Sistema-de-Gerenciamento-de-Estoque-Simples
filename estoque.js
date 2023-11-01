import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        
        String produto = "Teclado Mecânico";
        int quantidade = 50;
        int opcao = 0;

        
        String menu = "Menu:\n" +
                     "1. Consultar quantidade em estoque.\n" +
                     "2. Adicionar produtos ao estoque.\n" +
                     "3. Retirar produtos do estoque.\n" +
                     "4. Alterar o nome do produto.\n" +
                     "5. Sair.";

        

        Scanner


Scanner scanner = new Scanner(System.in);

        
        while (opcao != 5) {
            System.out.println(menu);
            System.out.print(
            System.out.println(menu);
            System.out.print

            System.out.println(menu
"Escolha uma opção: ");
            opcao = scanner.nextInt();

            
            opcao = scanner.nextInt
if (opcao == 1) {
                
                System.out.println("Quantidade em estoque: " + quantidade);
            } else if (opcao == 2) {
                
                System.out.print("Informe a quantidade a ser adicionada: ");
                int quantidadeAdicionar = scanner.nextInt();
                quantidade += quantidadeAdicionar;
                System.out.println(
                quantidade
"Produto adicionado ao estoque. Quantidade total: " + quantidade);
            } else if (opcao == 3) {
                
                System.out.print("Informe a quantidade a ser retirada: ");
                int quantidadeRetirar = scanner.nextInt();
                if (quantidadeRetirar <= quantidade) {
                    quantidade -= quantidadeRetirar;
                    System.out.println(
                    quantidade -= quantidadeRetirar;
                    System.out.println
"Produto retirado do estoque. Quantidade total: " + quantidade);
                } else {
                    System.out.println(
                    System
"Quantidade insuficiente em estoque.");
                }
            } else if (opcao == 4) {
                
               

                System.out.print("Informe o novo nome do produto: ");
                scanner.nextLine(); 
                scanner.nextLine();

               

                produto = scanner.nextLine();
                System.out.println(
                produto = scanner.nextLine();
                System.out

                produto = scanner

                produto =

               
"Nome do produto alterado para: " + produto);
            } else if (opcao == 5) {
                
                System.out.println("Saindo do programa. Obrigado!");
            } else {
                System.out.println("Opção inválida. Escolha uma opção válida.");
            }

            
            if (quantidade < 10) {
                System.out.println("ALERTA: Quantidade em estoque abaixo de 10 unidades!");
            }
        }

        
            }
        }


        scanner.close();
    }
}
